User.create!(
  username: "Guy",
  password: "password"
)

Channel.create!(
  name: "New Channel",
  moderator: User.find(1)
)

User.all.each do |user|
  Room.all.each do |room|
    next if user.id == channel.moderator_id
    RoomMembership.create(
      member: user,
      room: room
    )
  end
end
