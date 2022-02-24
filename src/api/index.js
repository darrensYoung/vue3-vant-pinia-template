import request from "@/utils/request";

export const login = (data) => {
  return request({
    url: "/meteor/v1/tools/new_list",
    method: "GET",
    data,
  });
};
