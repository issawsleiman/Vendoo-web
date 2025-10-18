interface LabelProps {
  /** The text content of the label */
  text: string;

  /** The id of the input this label is associated with */
  htmlFor: string;
}

export default function VendooLabel({ text, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="inline-block w-full text-xl md:text-2xl lg:text-2xl font-medium text-gray-800"
    >
      {text}
    </label>
  );
}




