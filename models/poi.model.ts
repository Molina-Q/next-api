import mongoose, { Document, Model } from "mongoose";

export interface IPoi extends Document {
    nom: string;
    cp: string;
    adresse: string;
    ville: string;
    longitude: number;
    latitude: number;
}

const poiSchema = new mongoose.Schema<IPoi>(
    {
        nom: {
            type: String,
            required: true
        },
        cp: {
            type: String,
            required: true
        },
        adresse: {
            type: String,
            required: true
        },
        ville: {
            type: String,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        }
    }, { timestamps: true }
);

// Function to create the model
const createModel = (): Model<IPoi> => {
    // Check if the model already exists to prevent recompilation
    return mongoose.models.Poi || mongoose.model<IPoi>("Poi", poiSchema);
};

// Create and export the model
const Poi = createModel();

export default Poi;