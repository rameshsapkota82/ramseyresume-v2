import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-center gap-2 px-4 py-2 text-center text-sm sm:flex-row sm:text-left">
        <span>
          Perth-based resume writing support available Australia-wide. Free resume reviews available.
        </span>
        <Link className="font-bold underline underline-offset-4" href="/get-a-quote/">
          Get a Free Resume Review
        </Link>
      </div>
    </div>
  );
}
