"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

// Define the type for the props
interface FormProps {
  isFormData: boolean;
  onFormSubmit?: (data: {
    email: string;
    name: string;
    rollNo: string;
  }) => void; // Optional callback prop
}

export function Form({ isFormData, onFormSubmit }: FormProps) {
  // Define state for form fields
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    rollNo: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (isFormData && onFormSubmit) {
      onFormSubmit(formData); // Send form data to parent component
    } else {
      isFormData = false;
      console.log(formData); // Log form data
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3.5 items-center justify-center my-auto w-full"
    >
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Divyanshu Sharma"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="rollNo">College RollNo</Label>
        <Input
          type="text"
          id="rollNo"
          placeholder="22/285"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        variant="outline"
        className="text-black w-full max-w-sm"
      >
        Submit
      </Button>
    </form>
  );
}
