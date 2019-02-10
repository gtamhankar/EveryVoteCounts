INSERT INTO `everyvotecounts`.`members` ( `PollUserName`,`PollUserPassword`,`PollUserRole`) VALUES ('GT', 'test','admin' );

INSERT INTO `everyvotecounts`.`genericpoll`
(
`PollID`,
`PollQuestion`,
`Option1Desc`,
`Option1Count`,
`Option2Desc`,
`Option2Count`,
`Option3Desc`,
`Option4Count`)
VALUES
(
1,
'Would you rather people call you, email you or write you?',
'Call',
30,
'Email',
60,
'Write',
5);

INSERT INTO `everyvotecounts`.`genericpoll`
(
`PollID`,
`PollQuestion`,
`Option1Desc`,
`Option1Count`,
`Option2Desc`,
`Option2Count`,
`Option3Desc`,
`Option4Count`)
VALUES
(
2,
'Which you you prefer?',
'More cereal than milk',
73,
'More milk than cereal',
20,
' I don''t care', 6
);