import dbConnect from '@/lib/db';
import poiModel from '@/models/poi.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    try {

        await dbConnect();

        const { nom, cp, ville, adresse } = await req.json();

        const poi = await poiModel.create({
            nom,
            cp,
            ville,
            adresse
        });

        return NextResponse.json([poi]);

    } catch (error) {
        console.log("error create POI : ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}