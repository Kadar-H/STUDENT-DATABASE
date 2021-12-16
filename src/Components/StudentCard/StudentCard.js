import React from "react";
import {
  StudentCardWrapper,
  StudentIdPicture,
  StudentInfo,
} from "./StudentCardElements";
// https://picsum.photos/200/300

const StudentCard = () => {
  return (
    <div>
      <StudentCardWrapper>
        <StudentIdPicture />
        <StudentInfo />
      </StudentCardWrapper>
    </div>
  );
};

export default StudentCard;
