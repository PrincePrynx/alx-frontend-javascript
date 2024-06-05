
export default function getListStudentIds(arrId) {
    if (Array.isArray(arrId)) {
      return arrId.map((element) => element.id);
    }
    return [];
  }
