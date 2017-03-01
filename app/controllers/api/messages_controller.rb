class Api::MessagesController < ApplicationController
  def create
    user = User.first
    room = Room.find_by(name: params[:room])
    message = params[:message]
    @message = Message.new(author: user, room: room, message: message)
    if @message.save
      render json: @message, status: 200
    else
      render json: @message.errors.full_messages, status: 422
    end
  end
end
