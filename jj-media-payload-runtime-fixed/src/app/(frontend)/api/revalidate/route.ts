import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(request:NextRequest){const secret=request.headers.get('x-revalidation-secret');if(!process.env.REVALIDATION_SECRET||secret!==process.env.REVALIDATION_SECRET)return NextResponse.json({ok:false,error:'Unauthorized'},{status:401});const body=await request.json().catch(()=>({}));if(body.path)revalidatePath(body.path);if(body.tag)revalidateTag(body.tag,'max');return NextResponse.json({ok:true,revalidatedAt:new Date().toISOString()})}
