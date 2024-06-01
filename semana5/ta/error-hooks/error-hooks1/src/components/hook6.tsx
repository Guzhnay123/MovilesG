import React, { useState } from "react";

interface UserData {
  name: string;
  age: number;
}

const Example6: React.FC = () => {
  const [data] = useState<UserData>({ name: "Diego", age: 30 });

  return (
    <div>
      <p>Nombre: {data.name}</p>
      <p>Edad: {data.age}</p>
    </div>
  );
};

export default Example6;
