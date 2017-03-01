class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    parsed_message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast(
      "channel_#{message.room.name}", JSON.parse(parsed_message)
    )
  end
end
