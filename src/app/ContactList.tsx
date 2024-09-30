"use client";

import { Button } from "@/components/ui/button";

interface Contact {
  name: string;
  phone: string;
}

interface ContactListProps {
  contacts: Contact[];
  deleteContact: (index: number) => void;
}

export default function ContactList({
  contacts,
  deleteContact,
}: ContactListProps) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 border-b pb-2"
            >
              <div>
                <p className="font-bold">{contact.name}</p>
                <p>{contact.phone}</p>
              </div>
              <Button
                onClick={() => deleteContact(index)}
                variant={"destructive"}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
