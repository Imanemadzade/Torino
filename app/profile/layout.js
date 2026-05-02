import Link from "next/link";

function ProfileLayout({ children }) {
  return (
    <div className="flex gap-9 p-13 ">
      <ul className="border border-solid rounded-md p-4">
        <li>
          <Link href="/profile">پروفایل من</Link>
        </li>
        <li>
          <Link href="/profile/my-tours">تورهای من</Link>
        </li>
        <li>
          <Link href="/profile/transactions">تراکنش ها</Link>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
}

export default ProfileLayout;
