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
        return {
            data: [
                {
                    key: 0,
                    name: "John Brown",
                    age: 32,
                    address: "New York No. 1 Lake Park",
                    tags: ["nice", "developer"]
                },
                {
                    key: 1,
                    name: "Jim Green",
                    age: 42,
                    address: "London No. 1 Lake Park",
                    tags: ["wow"]
                },
                {
                    key: 2,
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                    tags: ["cool", "teacher"]
                },
                {
                    key: 3,
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                    tags: ["cool", "teacher"]
                },{
                    key: 4,
                    name: "John Brown",
                    age: 32,
                    address: "New York No. 1 Lake Park",
                    tags: ["nice", "developer"]
                },
                {
                    key: 5,
                    name: "Jim Green",
                    age: 42,
                    address: "London No. 1 Lake Park",
                    tags: ["wow"]
                },
                {
                    key: 6,
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                    tags: ["cool", "teacher"]
                },
                {
                    key: 7,
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                    tags: ["cool", "teacher"]
                },

            ],
            columns: createColumns({
                sendMail(rowData) {
                    // message.info("send mail to " + rowData.name);
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
            title: "Name",
            key: "name"
        },
        {
            title: "Age",
            key: "age"
        },
        {
            title: "Address",
            key: "address"
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
    