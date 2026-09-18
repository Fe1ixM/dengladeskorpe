import { toast } from "react-toastify";
import { useAuthContext } from "../context/useAuthContext";
import { useRevalidator } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const useCrud = () => {
  const serverPath = `http://localhost:3042`;
  const { token } = useAuthContext();
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const revalidator = useRevalidator();
  const [isLoading, setIsLoading] = useState(false);

  const create = async (endpoint, formData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${serverPath}/${endpoint}`, {
        method: "POST",
        headers: authHeader,
        body: formData,
      });

      console.log(response);

      if (!response.ok) throw new Error("Kunne ikke oprette");

      revalidator.revalidate();
      toast.success("Oprettet!");
    } catch (error) {
      toast.error("Der skete en fejl");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const remove = async (endpoint, id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Er du sikker?",
      text: "Handlingen kan ikke fortrydes.",
      showCancelButton: true,
      confirmButtonText: "Ja, slet",
      cancelButtonText: "Annuller",
      confirmButtonColor: "#d33",
    });
    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`${serverPath}/${endpoint}/${id}`, {
        method: "DELETE",
        headers: authHeader,
      });
      if (!res.ok) throw new Error("Kunne ikke slette");
      revalidator.revalidate();
      toast.success("Slettet!");
    } catch {
      toast.error("Der skete en fejl");
    }
  };

  const update = async (endpoint, formData) => {
    try {
      const res = await fetch(`${serverPath}/${endpoint}`, {
        method: "PUT",
        headers: authHeader,
        body: formData,
      });
      if (!res.ok) throw new Error("Kunne ikke opdatere");
      revalidator.revalidate();
      toast.success("Opdateret!");
    } catch (error) {
      toast.error("Kunne ikke opdatere");
      throw error;
    }
  };

  return {
    create,
    remove,
    update,
    isLoading,
    error: null,
  };
};

export { useCrud };
