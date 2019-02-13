export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}



export function setMembers() {
	fetch('/users')
      .then(res => res.json())
      .then(members => console.log(members));
}

export function GetGenericPoll() {
	fetch('/genericpoll')
      .then(res => res.json())
      .then(genericpoll => console.log(genericpoll));
}

export function GetPollTemplate() {
	fetch('/polltemplates/getpoll?PollID=1')
      .then(res => res.json())
      .then(polltemplate => console.log(polltemplate));
}