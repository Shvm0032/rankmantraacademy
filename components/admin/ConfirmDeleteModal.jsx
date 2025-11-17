"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react"; // spinner icon

export default function ConfirmDeleteModal({ isOpen, onCancel, onConfirm }) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);

      onCancel(); 
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!loading ? onCancel : null}
      />

      {/* Modal Box */}
      <div className="relative bg-gray-800 text-white p-6 rounded-xl shadow-2xl border border-gray-700 w-80 animate-fadeIn">
        <h4 className="font-semibold text-xl mb-2 text-center">
          Delete Course?
        </h4>

        <p className="text-sm text-gray-300 text-center">
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onCancel}
            disabled={loading}
            className={`px-4 py-2 rounded bg-gray-600 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
            } transition`}
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className={`px-4 py-2 rounded bg-red-600 flex items-center gap-2 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            } transition`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
