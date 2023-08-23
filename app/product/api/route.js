// Here we will not write any react. here we will manage back end with javascript and some built in 
// features of next js

// This built in feature is used to manage the server response json data
import { NextResponse } from "next/server";

// now i want to manage a GET method from server
export async function GET(){
    return NextResponse.json({status:'ok', message:'Hello'});
}