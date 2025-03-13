# 라이나생명 커스텀 대시보드 스키마

# LINA Dashboard Meta Schema

[lina-dashboard.schema.json](https://res.craft.do/user/full/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/doc/A4E3165B-1119-44CA-8B74-D22143C39743/3691469C-6694-46B4-B5ED-49C3B8C9E787_2/oV1MKny4N7kFw4Drfcq1y6XsHu27vxSH5qQcB5sy0mgz/lina-dashboard.schema.json)

#### example file

위의 스키마에 맞추어 아래 샘플 데이터를 기준으로 라이나생명 커스텀 대시보드의 메타 정보를 IMQA에 제공해야 커스텀 대시보드로 사용할 수 있습니다.

[lina-default-dashboard.json](https://res.craft.do/user/full/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/doc/A4E3165B-1119-44CA-8B74-D22143C39743/8F1C5602-A79B-4237-AB04-4420DF761A98_2/lQPrT3M3NBn767tW1m53qfvaCshxlc4H55vzs7lgxj0z/lina-default-dashboard.json)

# Schema

**Properties**

| **Name**                                                                                                                                                                                                                                                           | **Type**   | **Description** | **Required** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------- | ------------ |
| **name**                                                                                                                                                                                                                                                           | `string`   | 대시보드 이름   | yes          |
| [**centers**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#29D59927-2C34-411C-8B8F-DE94996762D6) (Center List)   | `object[]` | 센터 목록       | yes          |
| [**clusters**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#748588AA-9D16-47A7-A8C2-982B6725D9F7) (Cluster List) | `object[]` | 클러스터 목록   | yes          |

**Example**

```json
{
  "name": "lina-dashboard",
  "centers": [
    {
      "name": "OB LINAONE-GOLD",
      "alias": "온라인뱅킹 라이나원 골드",
      "description": "온라인뱅킹 라이나원 골드 모니터링",
      "order": 0,
      "criteria": {
        /* criteria */
      },
      "channels": [
        /* channels */
      ],
      "screens": [
        /* screens */
      ]
    }
  ],
  "clusters": [
    /* clusters */
  ]
}
```

## centers[]: Center List

센터 목록

**Items: Center Item**

센터 항목

**Item Properties**

| **Name**                                                                                                                                                                                                                                                         | **Type**   | **Description** | **Required** |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------- | ------------ |
| **name**                                                                                                                                                                                                                                                         | `string`   | 센터 이름       | yes          |
| **alias**                                                                                                                                                                                                                                                        | `string`   | 센터 별칭       | yes          |
| **order**                                                                                                                                                                                                                                                        | `number`   | 센터 정렬 순서  | yes          |
| [**criteria**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#5802C01A-11E9-4E89-B538-0411C473F2E9)              | `object`   | 표시기준        | no           |
| [**screens**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#21BB0F90-6CB5-4A83-86C3-177B7A09F3D6) (Screen List) | `object[]` | 화면 목록       | yes          |

**Example**

```json
{
  "name": "OB LINAONE-GOLD",
  "alias": "온라인뱅킹 라이나원 골드",
  "description": "온라인뱅킹 라이나원 골드 모니터링",
  "order": 0,
  "criteria": {
    /* criteria */
  },
  "channels": [
    /* channels */
  ],
  "screens": [
    /* screens */
  ]
}
```

### centers[].criteria: Criteria

표시기준

**Properties**

| **Name**                                                                                                                                                                                                                                         | **Type** | **Description** | **Required** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------- | ------------ |
| [**count**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#6BA198AE-871E-4E27-84E1-CC1877F07570) | `object` | 미수신 카운트   |              |

**Example**

```json
{
  "count": {
    "timeout": {
      "unit": "ms",
      "value": 30000
    }
  }
}
```

#### centers[].criteria.count: Count

미수신 카운트

**Properties**

| **Name**                                                                                                                                                                                                                                           | **Type** | **Description** | **Required** |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------- | ------------ |
| [**timeout**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#9A0663F5-2DA4-4E14-84A1-DE8867B2161B) | `object` | yes             |              |

**Example**

```json
{
  "timeout": {
    "unit": "ms",
    "value": 30000
  }
}
```

#### centers[].criteria.count.timeout: Timeout

**Properties**

| **Name**  | **Type** | **Description** | **Required** |
| --------- | -------- | --------------- | ------------ |
| **unit**  | `string` | 단위            | yes          |
| **value** | `number` | 값              | yes          |

### centers[].screens[]: Screen List

화면 목록

**Items: Screen Item**

**Item Properties**

| **Name**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | **Type**   | **Description**                         | **Required** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------- | ------------ |
| **name**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `string`   | 화면 이름 (데이터로 보낸 이름이어야 함) | yes          |
| **alias**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `string`   | 화면 별칭                               | yes          |
| **description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `string`   | 화면 설명                               | yes          |
| [**criteria.levels**](https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#E6A2460D-4235-4C49-9D30-64AD13D65B58) (Screen Levels)                                                                                                                                                                                                                                                        | `string[]` | 기준 레벨 목록                          | yes          |
| **criteria.unit**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `string`   | 단위                                    | yes          |
| [**criteria**](#centersscreenscriteria https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#77ED07CA-CA9A-4A79-BD1E-D03239930FC1 https://docs.craft.do/editor/d/441bfb17-6516-c700-2f58-a4aaa6a4f2ee/A4E3165B-1119-44CA-8B74-D22143C39743/b/93829569-2462-424C-A45C-5D01C5A5AEB6?s=JfXYaZLQ3nmdy5a5yEdp9dwt5tNnTMr17sRWMJM7Ahyh#77ED07CA-CA9A-4A79-BD1E-D03239930FC1) (Screen Criteria) | `object[]` | 기준                                    | yes          |

**Example**

```json
[
  {
    "name": "subscription",
    "alias": "청약",
    "description": "청약 화면",
    "order": 0,
    "criteria.levels": [
      /* criteria.levels */
    ],
    "criteria.unit": "ms",
    "criteria": [
      /* criteria */
    ]
  },
  {
    "name": "counsel",
    "alias": "상담",
    "description": "상담 화면",
    "order": 1,
    "criteria.levels": [
      /* criteria.levels */
    ],
    "criteria.unit": "ms",
    "criteria": [
      /* criteria */
    ]
  }
]
```

#### centers[].screens[].criteria.levels[]: Screen Levels

기준 레벨 목록

**Items**

**Item Type:** `string`

#### centers[].screens[].criteria[]: Screen Criteria

기준

**Items: Screen Criteria Item**

기준 항목

**Item Properties**

| **Name**        | **Type** | **Description** | **Required** |
| --------------- | -------- | --------------- | ------------ |
| **name**        | `string` | 기준 이름       | yes          |
| **description** | `string` | 기준 설명       | yes          |
| **color**       | `string` | 색상 (HEX)      | yes          |
| **min**         | `number` | 최소값          | yes          |
| **max**         | `number` | 최대값          | yes          |

**Example**

```json
[
  {
    "name": "green",
    "description": "정상",
    "color": "#00FF00",
    "min": 0,
    "max": 15000
  },
  {
    "name": "yellow",
    "description": "주의",
    "color": "#FFFF00",
    "min": 15001,
    "max": 60000
  },
  {
    "name": "red",
    "description": "심각",
    "color": "#FF0000",
    "min": 60001,
    "max": 120000
  }
]
```

## clusters[]: Cluster List

클러스터 목록

**Items: Cluster Item**

**Item Properties**

| **Name**     | **Type**   | **Description**    | **Required** |
| ------------ | ---------- | ------------------ | ------------ |
| **name**     | `string`   | 클러스터 이름      | yes          |
| **alias**    | `string`   | 클러스터 별칭      | yes          |
| **order**    | `number`   | 클러스터 정렬 순서 | yes          |
| **criteria** | `object`   | 표시기준           | no           |
| **screens**  | `object[]` | 화면 목록          | yes          |

**Example**

```json
{
  "name": "CLUSTER 1",
  "alias": "클러스터 1",
  "order": 0,
  "criteria": {
    "count": {
      "timeout": {
        "unit": "ms",
        "value": 30000
      }
    }
  },
  "screens": [
    {
      "name": "subscription",
      "alias": "청약",
      "description": "청약 화면",
      "order": 0,
      "criteria.levels": ["green", "yellow", "red"],
      "criteria.unit": "ms",
      "criteria": [
        {
          "name": "green",
          "description": "정상",
          "color": "#00FF00",
          "min": 0,
          "max": 15000
        },
        {
          "name": "yellow",
          "description": "주의",
          "color": "#FFFF00",
          "min": 15001,
          "max": 60000
        },
        {
          "name": "red",
          "description": "심각",
          "color": "#FF0000",
          "min": 60001,
          "max": 120000
        }
      ]
    }
  ]
}
```

### clusters[].criteria: Criteria

표시기준

**Properties**

| **Name**  | **Type** | **Description** | **Required** |
| --------- | -------- | --------------- | ------------ |
| **count** | `object` | 미수신 카운트   | no           |

**Example**

```json
{
  "count": {
    "timeout": {
      "unit": "ms",
      "value": 30000
    }
  }
}
```

### clusters[].screens[]: Screen List

화면 목록

**Items: Screen Item**

**Item Properties**

| **Name**            | **Type**   | **Description**                         | **Required** |
| ------------------- | ---------- | --------------------------------------- | ------------ |
| **name**            | `string`   | 화면 이름 (데이터로 보낸 이름이어야 함) | yes          |
| **alias**           | `string`   | 화면 별칭                               | yes          |
| **description**     | `string`   | 화면 설명                               | yes          |
| **order**           | `number`   | 화면 정렬 순서                          | yes          |
| **criteria.levels** | `string[]` | 기준 레벨 목록                          | yes          |
| **criteria.unit**   | `string`   | 단위                                    | yes          |
| **criteria**        | `object[]` | 기준                                    | yes          |

**Example**

```json
[
  {
    "name": "subscription",
    "alias": "청약",
    "description": "청약 화면",
    "order": 0,
    "criteria.levels": ["green", "yellow", "red"],
    "criteria.unit": "ms",
    "criteria": [
      {
        "name": "green",
        "description": "정상",
        "color": "#00FF00",
        "min": 0,
        "max": 15000
      },
      {
        "name": "yellow",
        "description": "주의",
        "color": "#FFFF00",
        "min": 15001,
        "max": 60000
      },
      {
        "name": "red",
        "description": "심각",
        "color": "#FF0000",
        "min": 60001,
        "max": 120000
      }
    ]
  }
]
```

- Full example JSON 열기

```json
{
  "name": "lina-dashboard",
  "centers": [
    {
      "name": "OB LINAONE-GOLD",
      "alias": "온라인뱅킹 라이나원 골드",
      "description": "온라인뱅킹 라이나원 골드 모니터링",
      "order": 0,
      "criteria": {
        "count": {
          "timeout": {
            "unit": "ms",
            "value": 30000
          }
        }
      },
      "channels": [
        {
          "name": "OB",
          "alias": "온라인뱅킹"
        }
      ],
      "screens": [
        {
          "name": "subscription",
          "alias": "청약",
          "description": "청약 화면",
          "order": 0,
          "criteria.levels": ["green", "yellow", "red"],
          "criteria.unit": "ms",
          "criteria": [
            {
              "name": "green",
              "description": "정상",
              "color": "#00FF00",
              "min": 0,
              "max": 15000
            },
            {
              "name": "yellow",
              "description": "주의",
              "color": "#FFFF00",
              "min": 15001,
              "max": 60000
            },
            {
              "name": "red",
              "description": "심각",
              "color": "#FF0000",
              "min": 60001,
              "max": 120000
            }
          ]
        },
        {
          "name": "counsel",
          "alias": "상담",
          "description": "상담 화면",
          "order": 1,
          "criteria.levels": ["green", "yellow", "red"],
          "criteria.unit": "ms",
          "criteria": [
            {
              "name": "green",
              "description": "정상",
              "color": "#00FF00",
              "min": 0,
              "max": 15000
            },
            {
              "name": "yellow",
              "description": "주의",
              "color": "#FFFF00",
              "min": 15001,
              "max": 60000
            },
            {
              "name": "red",
              "description": "심각",
              "color": "#FF0000",
              "min": 60001,
              "max": 120000
            }
          ]
        }
      ]
    },
    {
      "name": "IB ONE-WEB-IB-3",
      "alias": "인터넷뱅킹 원웹 IB3",
      "description": "인터넷뱅킹 원웹 IB3 모니터링",
      "order": 1,
      "data.count.criteria": {
        "unit": "ms",
        "delay.time": 30000
      },
      "channels": [
        {
          "name": "IB",
          "alias": "인터넷뱅킹"
        }
      ],
      "clusters": [
        {
          "name": "CLUSTER 3",
          "alias": "클러스터 3"
        },
        {
          "name": "CLUSTER 4",
          "alias": "클러스터 4"
        }
      ],
      "screens": [
        {
          "name": "subscription",
          "alias": "청약",
          "order": 0,
          "description": "청약 화면",
          "criteria.levels": ["green", "yellow", "red"],
          "criteria.unit": "ms",
          "criteria": [
            {
              "name": "green",
              "description": "정상",
              "color": "#00FF00",
              "min": 0,
              "max": 15000
            },
            {
              "name": "yellow",
              "description": "주의",
              "color": "#FFFF00",
              "min": 15001,
              "max": 60000
            },
            {
              "name": "red",
              "description": "심각",
              "color": "#FF0000",
              "min": 60001,
              "max": 120000
            }
          ]
        },
        {
          "name": "counsel",
          "alias": "상담",
          "order": 1,
          "description": "상담 화면",
          "criteria.levels": ["green", "yellow", "red"],
          "criteria.unit": "ms",
          "criteria": [
            {
              "name": "green",
              "description": "정상",
              "color": "#00FF00",
              "min": 0,
              "max": 15000
            },
            {
              "name": "yellow",
              "description": "주의",
              "color": "#FFFF00",
              "min": 15001,
              "max": 60000
            },
            {
              "name": "red",
              "description": "심각",
              "color": "#FF0000",
              "min": 60001,
              "max": 120000
            }
          ]
        }
      ]
    }
  ],
  "clusters": [
    {
      "name": "CLUSTER 1",
      "alias": "클러스터 1"
    },
    {
      "name": "CLUSTER 2",
      "alias": "클러스터 2"
    }
  ]
}
```
