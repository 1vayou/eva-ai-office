# Telegram Message Templates

## 1. Daily Summary

**What matters now**
- {item_1}
- {item_2}
- {item_3}

**Team status**
- Mail: {mail_status}
- Builder: {builder_status}
- Daykeeper: {daykeeper_status}
- Signal: {signal_status}
- Voice: {voice_status}

**Waiting for approval**
- {approval_1}
- {approval_2}

Buttons:
[邮箱分支] [日程分支] [Builder 分支] [审批队列] [打开工作台]

---

## 2. Urgent Alert

**Important update**
{summary}

Buttons:
[查看详情] [稍后提醒] [打开工作台]

---

## 3. Approval Request

**Approval needed**
Assistant: {assistant_name}
Action: {action_type}
Summary: {summary}
Risk: {risk_level}

Buttons:
[批准] [驳回] [查看详情]

---

## 4. Branch Summary

**{assistant_name} branch**
Status: {status}
Current task: {current_task}
Latest update: {progress_summary}

Buttons:
[回到总览] [打开工作台] [下一步]
