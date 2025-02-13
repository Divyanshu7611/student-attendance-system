  "use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


interface FormProps {
  isFormData: boolean;
  onFormSubmit?: (data: {
    email: string;
    name: string;
    rollNo: string;
    branch: string;
    year: string;
    phone: string;  
    userID: string;
  }) => void;
}

export function Form({ isFormData, onFormSubmit }: FormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    rollNo: "",
    branch: "CSE",
    year: "I", // Default year
    phone: "",
    // universityRoll: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    rollNo: "",
    phone: "",
    branch: "",
    year: "",
    // universityRoll: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleBranchChange = (branch: string) => {
    setFormData({
      ...formData,
      branch,
    });
    setErrors({
      ...errors,
      branch: "",
    });
  };

  const handleYearChange = (year: string) => {
    setFormData({
      ...formData,
      year,
    });
    setErrors({
      ...errors,
      year: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Check if required fields are filled
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.name) {
      newErrors.name = "Name is required.";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.rollNo) {
      newErrors.rollNo = "Roll Number is required.";
      valid = false;
    } else {
      newErrors.rollNo = "";
    }


    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
      valid = false;
    } else {
      newErrors.phone = "";
    }

    if (!formData.branch) {
      newErrors.branch = "Please select a branch.";
      valid = false;
    } else {
      newErrors.branch = "";
    }

    if (!formData.year) {
      newErrors.year = "Please select a year.";
      valid = false;
    } else {
      newErrors.year = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await axios.post("/api/FormSubmit", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response) {
          toast.success("Form submitted successfully!");
          if (isFormData && onFormSubmit) {
            onFormSubmit({ ...formData, userID: response.data._id });
          } else {
            console.log(formData);
          }
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
        toast.error("Email or Roll No Already Exits");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center my-auto w-full max-w-lg bg-gray-50 p-6 rounded-md shadow-lg mx-auto"
    >
      <Toaster />
      <div className="flex justify-start items-center w-full">

      <div className="flex flex-col mx-auto justify-center items-center gap-5">
        <img src="/DSCRTU.jpg" className="lg:w-20 lg:h-20 rounded-lg w-full h-32 object-fill"/>
        <div className="flex flex-col">

        <h1 className="text-blue-900 font-bold text-sm lg:text-xl">Developer Student Club - RTU</h1>
      <h1 className="text-yellow-600 font-bold text-center text-sm lg:text-lg">DevDays: Android Edition</h1>
        </div>

      </div>
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email" className="font-medium text-gray-800">
          Email
        </Label>
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <Input
          type="email"
          id="email"
          placeholder="e.g (abc@gmail.com)"
          value={formData.email}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name" className="font-medium text-gray-800">
          Name
        </Label>
        {errors.name && <p className="text-red-600">{errors.name}</p>}
        <Input
          type="text"
          id="name"
          placeholder="e.g (Divyanshu Sharma)"
          value={formData.name}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="rollNo" className="font-medium text-gray-800">
          College Roll No
        </Label>
        {errors.rollNo && <p className="text-red-600">{errors.rollNo}</p>}
        <Input
          type="text"
          id="rollNo"
          placeholder="e.g (22/285)"
          value={formData.rollNo}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="phone" className="font-medium text-gray-800">
          Mobile Number
        </Label>
        {errors.phone && <p className="text-red-600">{errors.phone}</p>}
        <Input
          type="number"
          id="phone"
          placeholder="e.g (9999999999)"
          maxLength={10}
          minLength={10}
          value={formData.phone}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      {/* <div className="grid w-full items-center gap-2">
        <Label htmlFor="universityRoll" className="font-medium text-gray-800">
          University Roll No
        </Label>
        {errors.universityRoll && <p className="text-red-600">{errors.universityRoll}</p>}
        <Input
          type="text"
          id="universityRoll"
          placeholder="e.g (optional) "
          value={formData.universityRoll}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div> */}

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="branch" className="font-medium text-gray-800">
          Branch
        </Label>
        {errors.branch && <p className="text-red-600">{errors.branch}</p>}
        <Select onValueChange={handleBranchChange} value={formData.branch}>
          <SelectTrigger className="w-full text-gray-800 border-gray-500">
            <span>{formData.branch || "Select Branch"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CSE">Computer Science</SelectItem>
            <SelectItem value="ECE">Electronics and Communication</SelectItem>
            <SelectItem value="EE">Electrical and Electronics</SelectItem>
            <SelectItem value="ME">Mechanical</SelectItem>
            <SelectItem value="CE">Civil</SelectItem>
            <SelectItem value="P&I">P&I</SelectItem>
            <SelectItem value="EIC">EIC</SelectItem>
            <SelectItem value="AE">AE</SelectItem>
            <SelectItem value="OTHER">OTHER</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="year" className="font-medium text-gray-800">
          Year
        </Label>
        {errors.year && <p className="text-red-600">{errors.year}</p>}
        <Select onValueChange={handleYearChange} value={formData.year}>
          <SelectTrigger className="w-full text-gray-800 border-gray-500">
            <span>{formData.year || "Select Year"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="I">I</SelectItem>
            <SelectItem value="II">II</SelectItem>
            <SelectItem value="III">III</SelectItem>
            <SelectItem value="IV">IV</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        variant="outline"
        disabled={isSubmitting}
        className="text-white bg-gray-700 hover:bg-gray-900 hover:text-white w-full max-w-sm"
      >
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
