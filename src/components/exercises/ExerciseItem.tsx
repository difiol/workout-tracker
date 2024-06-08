import React from "react";

type Props = {
  id: string;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
};

export default function Exercise({
  id,
  name,
  weight,
  reps,
  sets,
  time,
  material,
}: Props) {
  return (
    <button className="w-full flex flex-col gap-4 p-5 rounded-lg bg-slate-400">
      <h2 className="text-2xl font-bold self-center">{name}</h2>
      <span className="w-full flex justify-between">
        <p>Weight: {weight} kg</p>
        <p>Reps: {reps}</p>
        <p>Sets: {sets}</p>
      </span>
      <span className="w-full flex justify-between">
        <p>Time: {time} min</p>
        <p>Material: {material}</p>
      </span>
    </button>
  );
}
