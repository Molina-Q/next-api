import dbConnect from '@/lib/db';
import poiModel from '@/models/poi.model';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    id: string
}

export async function GET(
    req: NextRequest,
    context: { params: Params }
) {
    try {

        await dbConnect();

        const poiId = context.params.id;

        const poi = await poiModel.findById(poiId);

        return NextResponse.json({ success: true, data: poi, message: "Single POI"});

    } catch (error) {
        console.log("error getting POI : ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}