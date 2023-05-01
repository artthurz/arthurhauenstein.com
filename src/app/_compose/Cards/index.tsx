import React from "react";
import { Card } from "../Card";
import Image from "next/image";

export function Cards() {
  return (
    <div className="grid grid-cols-4">
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
      <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
          src="/img/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
      </Card>
    </div>
  );
}
