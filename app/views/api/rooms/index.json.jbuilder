@rooms.each do |room|
  id = room.id
  json.set! room.id do
    json.extract! room, :name, :created_at
    json.set! :moderator, room.moderator.username
  end
end
