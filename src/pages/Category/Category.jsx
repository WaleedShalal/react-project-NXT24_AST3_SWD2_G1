import SectionOne from "@/components/SectionOne/SectionOne";
import SectionTwo from "@/components/SectionTwo/SectionTwo";

export default function Category() {
  return (
    <div>
      <h1>Category</h1>
      <SectionOne
        from="Category"
        theElement={<p>Hi I am from Category Page</p>}
      >
        <p>Hi I am from Category Page</p>
      </SectionOne>
      <SectionTwo from="Category" />
    </div>
  );
}
