import { useRouter } from "next/router";
let props = [
  {
    identifier: "5984",
    competencyRequired: "",
    credentialCategory: "",
    educationalLevel: "",
    alternateName: "Web Foundations (CER)",
  },
];
const getDegreeDetails = (id) =>
  props.filter((degree) => degree.identifier === id);

export default function EditDegreeDetail() {
  const router = useRouter();
  const { degree_id } = router.query;
  let degree = getDegreeDetails(degree_id)[0];
  return (
    <form>
      <div>
        <label htmlFor="identifier">Identifier</label>
        <input name="identifier" />
      </div>
    </form>
  );
}
