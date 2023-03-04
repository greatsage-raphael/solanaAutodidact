import { JsonMetadata } from "@metaplex-foundation/js"

interface NftProps {
  json: JsonMetadata<string> | null
}

export default function NftDisplay({ json }: NftProps) {
  if (!json) {
    return <p>Holders only! ☠️</p>;
  }

  const certificate = (json.attributes?.find(a => a.trait_type === "Certificate") || {}).value || "";
  const description = json.description;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium text-white">{json.name}</h3>
      <img src={json.image} alt={json.name} />
      <p className="text-sm text-white"><span className="font-bold">{description} as an : </span>{certificate}</p>
    </div>
  );
};
