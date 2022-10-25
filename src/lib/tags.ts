import tags from "../../meta/tags.yml";

export type TagContent = {
  readonly ta: string;
  readonly name: string;
};

const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags.tags) {
    result[tag.ta] = tag;
  }
  return result;
}

export function getTag(ta: string) {
  return tagMap[ta];
}

export function listTags(): TagContent[] {
  return tags.tags;
}
