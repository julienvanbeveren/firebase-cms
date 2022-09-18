import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ExtendedSidebar, {
  slugSafe,
} from "../../../components/extendedsidebar/ExtendedContent";
import Button from "../../../components/form/Button";
import Label from "../../../components/helpers/Label";
import content from "../../../config/content";
import pluralize from "pluralize";
import { FiPlus } from "react-icons/fi";
import Table from "../../../components/table/Table";

const Content: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentContentConfig, setCurrentContentConfig] = useState(
    content.find((el) => slugSafe(el.name) == id)
  );

  useEffect(() => {
    setCurrentContentConfig(content.find((el) => slugSafe(el.name) == id));
  }, [id]);

  useEffect(() => {
    if (!currentContentConfig) {
      router.push("/content");
    }
  }, [currentContentConfig]);

  if (!currentContentConfig) return <></>;

  return (
    <>
      <ExtendedSidebar />
      <div className="main-content">
        <div className="header">
          <h1 className="title">{currentContentConfig.name}</h1>
          <Label text={currentContentConfig.firebasePath} />
          <Button
            text={`Add ${pluralize.singular(currentContentConfig.name)}`}
            event={() => {}}
            style={{ marginLeft: "auto" }}
            icon={<FiPlus />}
          />
        </div>
        <Table content={currentContentConfig} />
      </div>
    </>
  );
};

export default Content;
