<template >
    <UserNav></UserNav>
    <n-space vertical :size="12">
        <n-data-table :bordered="false" :single-line="false" :columns="columns" :data="data" :pagination="pagination" />
    </n-space>
</template>
    <style>
    </style>
    <script>
import UserNav from "../components/UserNav.vue";
import { h } from "vue";
import { NTag, NButton, NSpace, NDataTable } from "naive-ui";


export default {
    components: { UserNav, NSpace, NDataTable },
    setup() {
        var stuData = [
                {
                    key: 0,
                    user: "admin",
                    pw:123456,
                    tags: ["admin"]
                },
                {
                    key: 1,
                    user: "student",
                    pw:123456,
                    tags: ["user"]
                },
            ]
        return {
            data: stuData,
            columns: createColumns({
                sendMail(rowData) {
                    console.log(rowData);
                    delete stuData[rowData.key]
                    console.log(stuData);
                }
            }),
            pagination: {
                pageSize: 10
            }
        };
    }
}


const createColumns = ({
    sendMail
}) => {
    return [
        {
            title: "账户",
            key: "user"
        },
        {
            title: "密码",
            key: "pw"
        },
        {
            title: "Tags",
            key: "tags",
            render(row) {
                const tags = row.tags.map((tagKey) => {
                    return h(
                        NTag,
                        {
                            style: {
                                marginRight: "6px"
                            },
                            type: "info",
                            bordered: false
                        },
                        {
                            default: () => tagKey
                        }
                    );
                });
                return tags;
            }
        },
        {
            title: "Action",
            key: "actions",
            render(row) {
                return h(
                    NButton,
                    {
                        size: "small",
                        onClick: () => sendMail(row)
                    },
                    { default: () => "Delete" }
                );
            }
        }
    ];
};

</script>
    
    