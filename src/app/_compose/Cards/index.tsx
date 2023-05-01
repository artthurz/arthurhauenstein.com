import React from "react";
import { Card } from "../Card";
import Image from "next/image";

export function Cards() {
  return (
    <div className="grid grid-cols-4 gap-12">
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-20 h-20 object-contain rounded-full mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
    </div>
  );
}
