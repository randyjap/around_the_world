@messages.each do |message|
  id = message.id
  json.set! message.id do
    json.extract! message, :id, :body, :created_at
    json.set! :author, message.author.username

  end
end
