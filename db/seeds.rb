User.create!(
  username: "Guy",
  password: "password"
)

10.times do
  User.create!(
    username: Faker::Name.name,
    password: "password"
  )
end

5.times do |i|
  Room.create!(
    name: Faker::GameOfThrones.city,
    moderator: User.find(rand(1..User.count))
  )
end

User.all.each do |user|
  Room.all.each do |room|
    next if user.id == room.moderator_id
    RoomMembership.create!(
      guest: user,
      room: room
    )
  end
end

60.times do
  Message.create!(
    author: User.find(rand(1..User.count)),
    room: Room.find(rand(1..Room.count)),
    message: Faker::StarWars.quote
  )
end
