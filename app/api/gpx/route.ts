import { getAllGPXFiles } from '@/app/data/blogs';
import { NextResponse } from 'next/server';

export async function GET() {
  const gpxFiles = await getAllGPXFiles();
  return NextResponse.json(gpxFiles);
}