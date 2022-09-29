import React from "react";

type Props = {};

export default function Hello({}: Props) {
  const someObject: any = { a: 1 };
  if (someObject?.b) {
  }

  return <div>Hello Test Optional Chaining.</div>;
}
