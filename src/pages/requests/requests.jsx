import { useEffect, useState } from "react";
import DataTable from "../../components/datatable/datatable";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import jalali from "dayjs-jalali";
import { IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import RequestDetailModal from "../requestDetail/requestDetailModal";

dayjs.extend(jalali);

const Requests = () => {
  const [data, setData] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setOpenModal(true);
  };

  const columns = [
    { header: "عنوان", accessorKey: "title" },
    { header: "کاربر", accessorKey: "user" },
    {
      header: "توضیحات",
      accessorFn: (row) =>
        row.description.split(" ").slice(0, 5).join(" ") + " ...",
    },
    {
      header: "تاریخ",
      accessorFn: (row) => dayjs(row.date).locale("fa").format("D MMMM"),
    },
    {
      header: "عملیات",
      accessorFn: (row) => (
        <IconButton onClick={() => handleViewRequest(row)}>
          <Visibility />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/requests")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <Layout>
      <h1>مدیریت درخواست ها</h1>
      <DataTable columns={columns} data={data} />
      {openModal && (
        <RequestDetailModal
          request={selectedRequest}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
    </Layout>
  );
};

export default Requests;
