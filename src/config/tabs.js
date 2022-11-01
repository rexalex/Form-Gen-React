const isVisible = (form) => form.isComunitar

const dataSource = [
  {
    key: '1',
    action: true,
    details: 'John Brown',
    area: 32,
    region: null,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    details: 'Jim Green',
    action: true,
    area: 42,
    region: null,
    address: 'London No. 1 Lake Park',
  },
  {
  },
];
const columns11 = [
  {
    title: 'Area',
    dataIndex: 'area11',
    key: 'area11',
    rules: [
      {
        required: true,
        message: 'Please input area!',
      },
    ],
    renderConfig: {
      type: 'InputNumberField',
      rules: {
        min: 0,
      },
    }
  },
  {
    title: 'Address',
    dataIndex: 'address11',
    key: 'address11',
    renderConfig: {
      type: 'InputField',
      rules: {},
    }
  },
  {
    title: 'Details',
    dataIndex: 'details11',
    key: 'details11',
    renderConfig: {
      type: 'TextAreaField',
      rules: {
        rows: 4,
        placeholder: "maxLength is 6",
        maxLength: 6
      },
    }
  },
];

const columns12 = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    renderConfig: {
      action: 'addNewRow'
    }
  },
  {
    title: 'Select Region',
    dataIndex: 'region',
    key: 'region',
    renderConfig: {
      type: 'MySelect',
      options: [
        { value: 'jack', name: 'Jack' },
        { value: 'lucy', name: 'Lucy' },
        { value: 'yiminghe', name: 'Yiminghe' },
      ],
    }
  },
  {
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
    renderConfig: {
      type: 'InputNumberField',
      rules: {
        min: 0,
      },
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    renderConfig: {
      type: 'InputField',
      rules: {},
    }
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
    renderConfig: {
      type: 'TextAreaField',
      rules: {
        rows: 4,
        placeholder: "maxLength is 6",
        maxLength: 6
      },
    }
  },
];

const columns21 = [
  {
    title: 'Area',
    dataIndex: 'area21',
    key: 'area21',
    rules: [
      {
        validator: (form) => (rule, value) => {
          const isPositive = value > 0;
          const fieldName = `area11-${rule.field.split('-')[1]}`
          const result1 = form['tab-1'][fieldName] > value
          const result = (isPositive && result1)
          console.log(form, rule, value)
          
          return new Promise((resolve, reject) => {
            result ? resolve() : reject('bad')
          })
        },
      },
    ],
    renderConfig: {
      type: 'InputNumberField',
      rules: {
        min: 0,
      },
    }
  },
  {
    title: 'Address',
    dataIndex: 'address21',
    key: 'address21',
    renderConfig: {
      type: 'InputField',
      rules: {},
    }
  },
  {
    title: 'Details',
    dataIndex: 'details21',
    key: 'details21',
    renderConfig: {
      type: 'TextAreaField',
      rules: {
        rows: 4,
        placeholder: "maxLength is 6",
        maxLength: 6
      },
    }
  },
];

const tabs = [
  {
    label: `Tab 1`,
    key: '1',
    children: [
      {
        type: 'InputField',
        label: "Username",
        name: "username",
        isVisible: () => true,
        rules: [
          {
            required: true,
            message: 'Please input your username!',
          },
        ],
      },
      {
        type: 'MyTableComponent',
        isVisible: () => true,
        columns: columns11,
        dataSource,
      },
      {
        type: 'MySwitch',
        label: "Comunitar",
        name: "comunitar",
        isVisible: () => true,
        rules: [
          {
            required: true,
            message: 'Please select comunitar!',
          },
        ],
      },
      {
        type: 'InputField',
        label: "Detail 1 yes",
        name: "detail1yes",
        isVisible,
      },
      {
        type: 'InputField',
        label: "Detail 2 yes",
        name: "detail2yes",
        isVisible,
      },
      {
        type: 'InputField',
        label: "Detail 1 no",
        name: "detailsNo",
        isVisible: (form) => !isVisible(form)
      },
      {
        type: 'MyTableComponent',
        isVisible: () => true,
        columns: columns12,
        dataSource: [{}],
      },
    ]
  },
  {
    label: `Tab 2`,
    key: '2',
    children: [
      {
        type: 'MyTableComponent',
        isVisible: () => true,
        columns: columns21,
        dataSource,
      },
    ],
  },
];
export default tabs;