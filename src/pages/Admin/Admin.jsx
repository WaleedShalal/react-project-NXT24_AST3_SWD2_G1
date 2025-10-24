import Parent from "@/components/Parent/Parent";

export default function Admin() {
  console.log("Admin Component");
  return (
    <div className="text-center">
      <h1>Admin</h1>
      <Parent />
    </div>
  );
}
