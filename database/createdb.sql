CREATE TYPE "cardsType" AS ENUM ('credit', 'debt', 'both');

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "credentials" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"title" TEXT NOT NULL,
	"url" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "credentials_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "cards" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"title" TEXT NOT NULL,
	"number" TEXT NOT NULL,
	"cardName" TEXT NOT NULL,
	"cvv" TEXT NOT NULL,
	"expirationDate" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"isVirtual" BOOLEAN NOT NULL,
	"type" "cardsType" NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "safeNotes" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"title" varchar(50) NOT NULL,
	"text" varchar(1000) NOT NULL,
	CONSTRAINT "safeNotes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "wifi" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"title" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "wifi_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "credentials" ADD CONSTRAINT "credentials_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "safeNotes" ADD CONSTRAINT "safeNotes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "wifi" ADD CONSTRAINT "wifi_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

