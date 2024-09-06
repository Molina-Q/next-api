import dbConnect from '@/lib/db';
import poiModel from '@/models/poi.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    req: NextRequest
) {
    try {

        await dbConnect();

        const allPoi = await poiModel.find();

        return NextResponse.json({ success: true, data: allPoi, message: "All POI"});

    } catch (error) {
        console.log("error create POI : ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}