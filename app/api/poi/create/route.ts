import dbConnect from '@/lib/db';
import poiModel from '@/models/poi.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    try {

        await dbConnect();

        const { nom, cp, ville, adresse, latitude, longitude } = await req.json();

        const poi = await poiModel.create({
            nom,
            cp,
            ville,
            adresse,
            latitude,
            longitude
        });

        return NextResponse.json([poi]);

    } catch (error) {
        console.log("error create POI : ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}