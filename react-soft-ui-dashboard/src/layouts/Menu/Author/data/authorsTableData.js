/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";
import AuthApi from "../../../api/auth";

// Images
// import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  //useEffectawait
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

const listUser = async () => {
  try {
    let response = await AuthApi.UserList();
    console.log("RESPONSE : -------> ", response);
    let rows = JSON.stringify(response.data);
    var result = JSON.parse(rows);
    if (response.status_code === 400) {
      console.log("Error!");
    } else {
      console.log("not error! ");
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

const colorshow = (status) => {
  if (status === "online") {
    return "success";
  } else {
    return "secondary";
  }
};

const render_button_acttion = () => {
  let role = localStorage.getItem("role");
  role = JSON.parse(role);
  role = Object.entries(role);
  let listkey = role.map(([key, value]) => {
    console.log("key : ", value);
    return key;
  });

  // eslint-disable-next-line no-unused-vars
  let listvalueuser = role.map(([key, value]) => {
    if (key === "users") {
      console.log("users value : -----> ", value);
      return value;
    }
  });

  var button_action = [];
  if (listkey.indexOf("users") > -1) {
    console.log("kkkkkkkkkkkkkkkkk ", listvalueuser);
    // eslint-disable-next-line no-unused-vars
    if (listvalueuser.indexOf("update") > -1) {
      console.log(".................................");
      let actionButtonUpdate = (
        <SuiTypography
          component="a"
          href=""
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Update
        </SuiTypography>
      );
      button_action = [...button_action, actionButtonUpdate];
    }
    if (listvalueuser.indexOf("create") > -1) {
      let actionButtonCreate = (
        <SuiTypography
          component="a"
          href=""
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Update
        </SuiTypography>
      );
      button_action = [...button_action, actionButtonCreate];
    }
    if (listvalueuser.indexOf("create") > -1) {
      let actionButtonDelete = (
        <SuiTypography
          component="a"
          href=""
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Delete
        </SuiTypography>
      );
      button_action = [...button_action, actionButtonDelete];
    }
    // eslint-disable-next-line no-unused-vars
  }
  console.log("listkey : ----> ", listkey);
  console.log("rolee ----> ", role);
  return button_action;
};

const userRow = async (users) => {
  let items = await users;
  let action = localStorage.getItem("role");
  console.log(action);
  let rowsss = items.data;
  console.log("items : --------> ", rowsss);
  let rows = rowsss.map((item) => ({
    author: <Author image={team3} name={item._username} email="alexa@creative-tim.com" />,
    status: (
      <SuiBadge
        variant="gradient"
        badgeContent={item.status}
        color={colorshow(item.status)}
        size="extra-small"
      />
    ),
    action: render_button_acttion(item.role),
  }));
  console.log(rows);
  return rows;
};

export const results = async () => {
  try {
    console.log("PPPPPPPPPPPPPPPPP");
    let itemrow = await userRow(listUser());
    console.log(" item rows : -----> ", itemrow);
    return {
      columns: [
        { name: "author", align: "left" },
        { name: "action", align: "right" },
      ],
      rows: await itemrow,
    };
  } catch (error) {
    console.log(error);
  }
};
