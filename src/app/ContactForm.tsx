"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, FormEvent } from "react";

interface ContactFormProps {
  addContact: (contact: Contact) => void;
}

interface Contact {
  name: string;
  phone: string;
}

export default function ContactForm({ addContact }: ContactFormProps) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      addContact({ name, phone });
      setName("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 py-4">
      <div className="mb-2">
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="mb-2">
        <Label>Phone</Label>
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>
      <Button type="submit">Add Contact</Button>
    </form>
  );
}
