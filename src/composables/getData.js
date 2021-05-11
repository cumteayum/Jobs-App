import { ref, reactive, computed } from "vue";
import { db } from "../firebase/firebase.js";

export default function getData() {
  const jobs = ref([]);
  const cross = ref(null);

  const getDBData = () => {
    db.collection("jobs")
      .get()
      .then((snapshot) => {
        jobs.value = snapshot.docs.map((doc) => doc.data());
      });
  };

  const deleteJob = (index) => {
      console.log(index);
    let jobQuery = db
      .collection("jobs")
      .where("name", "==", jobs.value[index].name);
    jobQuery.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
        location.reload();
      });
    });
  };
  return {jobs, cross, getDBData, deleteJob}
}
