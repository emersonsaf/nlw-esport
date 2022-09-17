import express, { json } from 'express';
import { PrismaClient } from '@prisma/client'
import { convertHoursToMinutes } from './utils/convert-hours-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

import cors from 'cors';

const prisma = new PrismaClient({
  log: ['query']
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.status(201).json(games);
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekdays: body.weekdays.join(','),
      hourStart: convertHoursToMinutes(body.hourStart),
      hourEnd: convertHoursToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })
  return response.json(ad)
});

app.get('/games/:id/ads', async (request, response) => {

  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      useVoiceChannel: true,
      hourStart: true,
      hourEnd: true,
      yearsPlaying: true,
      weekdays: true,

    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekdays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }));
});

app.get('/ads/:id/discord', async (request, response) => {

  const adsId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adsId
    }
  })

  return response.json(ad);
});


app.listen('3333')

