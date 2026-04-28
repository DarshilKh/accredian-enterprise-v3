import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  domain?: string;
  candidates?: string;
  deliveryMode?: string;
  location?: string;
}

const leads: (LeadData & { id: string; createdAt: string })[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json({ error: "Missing required fields: name, email, company" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }
    const lead = { ...body, id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`, createdAt: new Date().toISOString() };
    leads.push(lead);
    return NextResponse.json({ success: true, message: "Thank you! Our team will contact you soon.", id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
