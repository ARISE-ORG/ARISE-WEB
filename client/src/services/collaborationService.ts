import { apiFetch } from "./api";
import { COLLABORATION_ENDPOINTS } from "@/utils/constants";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
// Get these from: https://dashboard.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Replace with your EmailJS public key
};

export interface CollaborationRequest {
  name: string;
  email: string;
  companyName: string;
  dealDetails: string;
}

export interface CollaborationResponse {
  message: string;
}

export const collaborationService = {
  // ============================================================
  // TEMPORARY: Using EmailJS until backend server is online
  // ============================================================
  submitCollaboration: async (
    data: CollaborationRequest,
  ): Promise<CollaborationResponse> => {
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company_name: data.companyName,
        deal_details: data.dealDetails,
        to_email: "kareem.enein@gmail.com",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      return {
        message: "Collaboration request submitted successfully",
      };
    } catch (error) {
      console.error("EmailJS error:", error);
      throw new Error("Failed to submit collaboration request");
    }
  },

  // ============================================================
  // BACKEND VERSION: Uncomment when backend server is online
  // ============================================================
  // submitCollaboration: async (
  //   data: CollaborationRequest,
  // ): Promise<CollaborationResponse> => {
  //   const res = await apiFetch(COLLABORATION_ENDPOINTS.SUBMIT, {
  //     method: "POST",
  //     skipAuth: true,
  //     body: JSON.stringify(data),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (!res.ok) {
  //     const error = await res
  //       .json()
  //       .catch(() => ({ message: "Submission failed" }));
  //     throw new Error(
  //       error.message || "Failed to submit collaboration request",
  //     );
  //   }

  //   return res.json();
  // },
};
