import Parent from "@/components/Parent/Parent";
import TheModal from "@/components/TheModal/TheModal";
import { createPortal } from "react-dom";

export default function Admin() {
  console.log("Admin Component");
  const mySection = (
    <section>
      <h2>This section will be in sub-root</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam
        illum neque accusamus veniam ex dolorum similique esse beatae, autem
        facere perspiciatis ullam eaque hic corporis et in veritatis illo?
      </p>
    </section>
  );
  return (
    <div className="text-center">
      <h1>Admin</h1>
      <Parent />
      <TheModal />
      {createPortal(mySection, document.getElementById("sub-root"))}
    </div>
  );
}
